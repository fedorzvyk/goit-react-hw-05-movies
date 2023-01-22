export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
