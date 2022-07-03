import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { fetchGreetingData } from "./greetingSlice";

const Greeting = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGreetingData());
  }, [dispatch]);

  const name = useAppSelector((state) => state.greeting.name);
  const asyncName = useAppSelector((state) => state.greeting.asyncName);
  return (
    <div>
      <div>Hello {name} from redux toolkit.</div>
      <div>Hello {asyncName} from async.</div>
    </div>
  );
};

export default Greeting;
