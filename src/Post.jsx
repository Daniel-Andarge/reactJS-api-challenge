import React from "react";
import { Underline } from "./components/styles/MainContainer.styled";
import { PostView } from "./components/styles/PostView.styled";
import { ID } from "./components/styles/PostView.styled";
import { Title } from "./components/styles/PostView.styled";
import { Body } from "./components/styles/PostView.styled";
import { Span } from "./components/styles/PostView.styled";


export const Post = ({ post }) => {
  return (
  
  <PostView>
      
      <ID>
        <Span>{post.id}</Span>
      </ID>

      <Title>
          {post.title}
      </Title>

        <Underline/>

    <Body>
      <p>{post.body}</p>
    </Body>
 
  </PostView>


  );
};