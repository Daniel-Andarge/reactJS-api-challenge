import React from "react";
import { Underline } from "./styles/MainContainer.styled";
import { PostView } from "./styles/PostView.styled";
import { ID } from "./styles/PostView.styled";
import { Title } from "./styles/PostView.styled";
import { Body } from "./styles/PostView.styled";
import { Span } from "./styles/PostView.styled";


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