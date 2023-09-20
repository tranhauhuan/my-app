export default function Message() {
  const handleClick = function () {
    console.log("button clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
