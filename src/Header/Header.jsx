import Category from "./Category";
import Priority from "./Priority";
import Sort from "./Sort";

function Header() {
  return (
    <>
      <div className="bg-violet-500 rounded shadow-2xl flex flex-wrap justify-end items-center gap-5  p-2">
        <div>
          <Category></Category>
        </div>
        <div>
          <Priority></Priority>
        </div>
        <div>
          <Sort></Sort>
        </div>
      </div>
    </>
  );
}
export default Header;
