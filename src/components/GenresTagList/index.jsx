import GenresTag from 'components/GenresTag';

const GenresTagList = ({ options, onChange }) => {
  return (
    <div>
      {options.map((genreItem) => {
        return (
          <GenresTag
            key={genreItem.id.toString()}
            label={genreItem.name}
            id={`genreItem-${genreItem.id}`}
            onChange={(e) => onChange(e, genreItem)}
          />
        );
      })}
    </div>
  );
};

export default GenresTagList;
