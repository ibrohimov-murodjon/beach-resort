import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";

export default function Loading() {
  return (
    <div className="loading">
      <h4>rooms data loading ...</h4>
      <section className="featured-rooms">
        <div className="featured-rooms-center">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={250}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={250}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={250}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={250}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={250}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={250}
          />
        </div>{" "}
      </section>
    </div>
  );
}
