import { data } from "./tweets";
import Form from "./Form";
import Card from "./Card";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [tweets, setTweets] = useState(data);
  const [newTweet, setNewTweet] = useState("");
  const [editedTweet, setEditedTweet] = useState(" ");

  const [idx, setIdx] = useState(-1);
  //Add A Tweet
  const addTweet = (e) => {
    e.preventDefault();
    let a = {
      userName: "Anonymous",
      Name: "Anonymous",
      tweet: `${newTweet}`,
      datetime: new Date().toLocaleString()
    };
    const newT = [...tweets];
    newT.push(a);

    setTweets(newT);

    setNewTweet("");
  };
  //Edit A Tweet
  const handleEditedTweet = (e, tweet) => {
    e.preventDefault();
    const newT = [...tweets];
    const updTweet = newT.find((tw) => tw.userName === tweet.userName);
    console.log(updTweet);
    updTweet.tweet = editedTweet;
    setTweets(newT);
    setEditedTweet("");
  };
  const addNewTweet = (e) => {
    setNewTweet(e.target.value);
  };
  //remove a tweet
  const removeTweet = (index) => {
    const newTweets = [...tweets];
    newTweets.splice(index, 1);
    setTweets(newTweets);
  };
  console.log(tweets);

  return (
    <div className="ui container">
      <Form addTweet={addTweet} newTweet={newTweet} addNewTweet={addNewTweet} />
      {tweets.map((tweet, index) => {
        return (
          <div key={tweet.Name}>
            {index === idx ? (
              <div class="ui link cards">
                <div class="card">
                  <div class="content">
                    <div class="header"></div>
                    <div class="meta"></div>
                    <div class="description">
                      <input
                        class="ui massive icon input"
                        type="text"
                        defaultValue={tweet.tweet}
                        onChange={(e) => {
                          setEditedTweet(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="extra content">
                    <button
                      onClick={() => {
                        setIdx(-1);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={(e) => {
                        handleEditedTweet(e, tweet);
                        setIdx(-1);
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Card
                key={index}
                tweet={tweet}
                index={index}
                tweets={tweets}
                removeTweet={removeTweet}
                setIdx={setIdx}
                idx={idx}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
