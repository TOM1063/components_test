import React from "react";
import * as top from "@/features/top/components/index";
import example_util from "@/utils/example_util";
import { Button } from "@mui/material";

function page() {
  //データ取得はpageでしか行わない。
  // const data = await example_util.~;
  return (
    <div>
      toppage
      <Button variant="outlined">test</Button>
    </div>
  );
}

export default page;
