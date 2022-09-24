export default function InputForm({ label, ...otherProps }) {
  return (
    <div className="flex flex-col w-full text-black">
      <label>{label}</label>
      <input {...otherProps} className="border-b border-b-black border-t-0 border-l-0 border-r-0 mb-2"/>
    </div>
  );
}

