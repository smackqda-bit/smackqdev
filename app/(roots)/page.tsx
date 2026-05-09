
import Preview from "../components/sections/Preview";
import Projects from "../components/sections/Projects";
import Stack from "../components/sections/Stack";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Preview/>
      <Stack/>
      <Projects/>
    </div>
  );
}
