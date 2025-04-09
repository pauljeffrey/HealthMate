// import { z } from "zod";
// import { DynamicTool, DynamicStructuredTool } from "@langchain/core/tools";
// import { X } from "lucide-react";
import { DuckDuckGoSearch } from "@langchain/community/tools/duckduckgo_search";

const webSearch = new DuckDuckGoSearch({ maxResults: 1 });

const tools = [
    webSearch
  ];


export default tools;
