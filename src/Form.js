const Form = ({
  addTweet,

  newTweet,

  addNewTweet
}) => {
  return (
    <div>
      <form class="ui form">
        <div class="field">
          <label>Enter a Tweet</label>
          <input
            type="text"
            value={newTweet}
            onChange={addNewTweet}
            placeholder="Tweet"
          />
        </div>

        <button
          class="ui button"
          type="submit"
          onClick={(e) => {
            addTweet(e);
          }}
        >
          Post
        </button>
      </form>

      <br />
    </div>
  );
};

export default Form;
