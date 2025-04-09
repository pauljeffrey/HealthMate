// import { z } from "zod";
// import { DynamicTool, DynamicStructuredTool } from "@langchain/core/tools";
// import { X } from "lucide-react";

import { TavilySearchResults } from "@langchain/community/tools/tavily_search";


const tools = [
  new TavilySearchResults({ maxResults: 3 }),
  ];


export default tools;
