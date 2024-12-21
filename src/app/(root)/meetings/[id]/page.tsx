import React from "react";

export default function Meeting({ params }: { params: { id: string } }) {
  return <div className="">Meeting Room: #{params.id}</div>;
}
