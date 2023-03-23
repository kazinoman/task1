import { Paper } from "@mui/material";
import React from "react";
import { IColumn } from "@/type";
import SinglePersonCard from "../singlePersonCard";

const ParentSection: React.FC<IColumn> = ({ id, name, personInfo }) => {
  //   console.log(name);

  return (
    <>
      <Paper
        className="w-80  mx-2 overflow-y-auto"
        elevation={0}
        sx={{
          minWidth: "350px",
          bgcolor: "#F2F4F7",
          height: "800px",
          position: "relative",
        }}
      >
        <div className="flex flex-row align-middle justify-between p-4 z-10 sticky top-0 bg-slate-300 mb-2">
          <h4 className="font-medium">{name}</h4>
          <div>
            <h3>0</h3>
          </div>
        </div>
        <div className="flex flex-col">
          {personInfo.map((data) => {
            return (
              <div className="">
                <SinglePersonCard
                  key={data.id}
                  id={data.id}
                  pname={data.pname}
                  description={data.description}
                  date={data.date}
                  fileCount={data.fileCount}
                  messageCount={data.messageCount}
                  unknownNumber={data.unknownNumber}
                  image={data.image}
                />
              </div>
            );
          })}
        </div>
      </Paper>
    </>
  );
};

export default ParentSection;
