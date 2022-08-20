import { Button, Checkbox } from "@mantine/core";
import type { NextPage } from "next";
import { TextInput } from "@mantine/core";
import { useState } from "react";

const Home: NextPage = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [inCompleteTodos, setInCompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const addTodo = (): void => {
    setInCompleteTodos([...inCompleteTodos, todoText]);
    setTodoText("");
  };

  const completeTodo = (index: number) => {
    // 完了したtodoを追加
    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);

    // 未完了のtodoから削除する
    const newIncompleteTodos = inCompleteTodos.filter((_, i) => i !== index);
    setInCompleteTodos(newIncompleteTodos);
  };

  const deleteTodo = (index: number) => {
    const newCompleteTodos = [...inCompleteTodos, completeTodos[index]];
    setInCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = completeTodos.filter((_, i) => i !== index);
    setCompleteTodos(newIncompleteTodos);
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <Button className="mr-[59px]" onClick={addTodo}>
          追加
        </Button>
        <TextInput
          placeholder="todoを追加"
          classNames={{ input: "bg-[#F5F5F5]" }}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </div>
      <div className="pl-[750px]">
        <div>📝 未完了</div>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <li key={index}>
                <Checkbox
                  label={todo}
                  onChange={() => {
                    completeTodo(index);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pl-[750px]">
        <div>✅ 完了</div>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={index}>
                <Checkbox
                  label={todo}
                  checked={true}
                  onClick={() => {
                    deleteTodo(index);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
