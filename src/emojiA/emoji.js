import React,{useState} from "react";
const emojiData=[
  { symbol: "😀", name: "Grinning Face" },
  { symbol: "😍", name: "Heart Eyes" },
  { symbol: "👍", name: "Thumbs Up" },
  { symbol: "🌟", name: "Star" },
  { symbol: "🍔", name: "Burger" },
  { symbol: "🎉", name: "Party Popper" },
  { symbol: "🌈", name: "Rainbow" },

]
const EmojiSearch=()=>{
    const [search,setSearch]=useState("");
    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }
    const  filterEmojis=emojiData.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(search.toLowerCase());
    });
    return(
      <>
          <h1>Search Emojis</h1>
          <input
              type="text"
              placeholder="Search for an emoji..."
              value={search}
              onChange={handleSearch}
          />
          <div>{filterEmojis.map((emoji)=>emoji.symbol)}</div>
      </>
    )
}
export default EmojiSearch;