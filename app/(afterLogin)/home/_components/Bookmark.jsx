"use cilent";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { deleteBookmark } from "../recommended/[placeKey]/info/_api/deleteBookmark";
import { registerBookmark } from "../recommended/[placeKey]/info/_api/registerBookmark";
const Bookmark = ({ placeKey, mine }) => {
  console.log("placeKey in Bookmark component:", placeKey);

  const [bookmarked, setBookmarked] = useState(mine);

  const toggleBookmark = async () => {
    try {
      if (bookmarked) {
        await deleteBookmark({ placeKey });
        setBookmarked(false);
      } else {
        await registerBookmark({ placeKey }); // 객체 형태로 placeKey 전달
        setBookmarked(true);
      }
    } catch (error) {
      console.error("북마크 상태 변경 실패:", error);
    }
  };

  return (
    <IconButton
      onClick={toggleBookmark}
      aria-label="bookmark"
      sx={{
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "50%",
        },
      }}
    >
      {bookmarked ? (
        <BookmarkIcon style={{ color: "#388e3c", fontSize: 32 }} />
      ) : (
        <BookmarkBorderIcon style={{ color: "#388e3c", fontSize: 32 }} />
      )}
    </IconButton>
  );
};

export default Bookmark;
