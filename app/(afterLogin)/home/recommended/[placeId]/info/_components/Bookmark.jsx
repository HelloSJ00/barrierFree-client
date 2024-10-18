"use cilent";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { deleteBookmark } from "../_api/deleteBookmark";
import { registerBookmark } from "../_api/registerBookmark";
const Bookmark = ({ placeId }) => {
  // 북마크 상태를 관리하는 state
  const [bookmarked, setBookmarked] = useState(false);

  // 북마크 상태를 토글하는 함수
  const toggleBookmark = async () => {
    try {
      if (bookmarked) {
        // 북마크가 활성화되어 있다면 삭제 API 호출
        await deleteBookmark(placeId);
        setBookmarked(false); // 상태를 false로 변경
      } else {
        // 북마크가 비활성화되어 있다면 추가 API 호출
        await registerBookmark(placeId);
        setBookmarked(true); // 상태를 true로 변경
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
        <BookmarkIcon style={{ color: "#1976d2", fontSize: 24 }} />
      ) : (
        <BookmarkBorderIcon style={{ color: "#1976d2", fontSize: 24 }} />
      )}
    </IconButton>
  );
};

export default Bookmark;
