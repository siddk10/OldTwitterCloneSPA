const Card = ({ tweet, index, tweets, removeTweet, setIdx }) => {
  return (
    <div className="ui link cards" key={tweet.userName}>
      <div class="card">
        <div class="content">
          <div class="header">{tweet.Name}</div>
          <i class="user icon"></i>
          {tweet.userName}
          <div class="description">{tweet.tweet}</div>
        </div>
        <div class="extra content">
          <span class="right floated">{tweet.datetime}</span>
          <span>
            <i
              class="edit icon"
              onClick={() => {
                setIdx(index);
              }}
            ></i>
            <i
              class="trash icon"
              onClick={() => {
                removeTweet(index);
              }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
