import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="
    flex
    min-h-full
    flex-col
    justify-center
    py-12
    sm:ps-6
    lg:px:8">
      <div >
        <h2 
        className="mt-6
        text-center
        text-3xl
        font-bold
        tracking-tight
        text-gray-900">
          Sign into your account</h2></div> 
          <AuthForm /> 
    </div>
  );
}
