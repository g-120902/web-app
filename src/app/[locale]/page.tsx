import { Metadata } from "next";
import Play from "@/components/Home";
 
export const metadata: Metadata = {
  title: "Paragon Productions",
  description: "This is Home page for Paragon Productions educational website"
};

export default function Home(): JSX.Element {

  return (
      <div>
         <Play />
      </div>
  );

}
