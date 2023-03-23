import React, { ReactNode } from "react";
import { Avatar, IconButton, Paper, Typography } from "@mui/material";
import { GrStackOverflow } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { RiUpload2Line } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

import { IPerson, IReactNode } from "../../type";

const SinglePersonCard: React.FC<IPerson> = (props) => {
  const {
    id,
    pname,
    description,
    date,
    fileCount,
    image,
    messageCount,
    unknownNumber,
  } = props;

  console.log(image);
  return (
    <Paper elevation={0} className="p-2 mb-2 mx-2">
      <Stack className="justify-between mb-4">
        <Stack className="gap-2">
          <Avatar
            src={`${image[0].image}`}
            sx={{ width: "30px", height: "30px" }}
          />
          <h6 className="text-center text-sm font-medium">Client Name</h6>
        </Stack>
        <Stack className=" gap-2">
          <Avatar
            src={`${image[1].image}`}
            sx={{ width: "30px", height: "30px" }}
          />
          <h6 className="text-center text-sm font-medium">{pname}</h6>
        </Stack>
      </Stack>
      <Stack className="justify-between">
        <Stack className="gap-2 w-60">
          <IconButton className="w-4 h-4 p-0" disableRipple>
            <GrStackOverflow />
          </IconButton>
          <h6 className="truncate text-ellipsis overflow-hidden font-normal text-xs">
            {description}
          </h6>
        </Stack>

        <Paper
          className="flex flex-row items-center p-1 "
          elevation={0}
          sx={{ bgcolor: "#F2F4F7" }}
        >
          <IconButton className="w-4 h-4 p-0">
            <BiTask />
          </IconButton>
          <h6 className="text-xs font-medium">1/2</h6>
        </Paper>
      </Stack>
      <Stack className=" mt-3 gap-4">
        <Stack className=" gap-3">
          <Avatar
            src={`${image[3].image}`}
            sx={{ width: "25px", height: "25px" }}
          />
          <Avatar
            src={`${image[2].image}`}
            sx={{ width: "25px", height: "25px" }}
          />
          <div
            className="flex flex-row items-center justify-center h-7 w-7  rounded-full"
            style={{ backgroundColor: "#F2F4F7" }}
          >
            <h6 className="text-xs font-medium">{unknownNumber}+</h6>
          </div>
        </Stack>
        <Stack className="gap-1">
          <IconButton className="w-4 h-4 p-0" disableRipple>
            <TbMessages />
          </IconButton>
          <h6 className="text-xs font-medium">14+</h6>
        </Stack>
        <Stack className="gap-1">
          <IconButton className="w-4 h-4 p-0" disableRipple>
            <RiUpload2Line />
          </IconButton>
          <h6 className="text-xs font-medium">14+</h6>
        </Stack>
        <Stack className="gap-1">
          <IconButton className="w-4 h-4 p-0" disableRipple>
            <FaCalendarAlt />
          </IconButton>
          <h6 className="text-xs font-medium">{date}</h6>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SinglePersonCard;

export const Stack = (props: IReactNode) => {
  return (
    <div className={"flex flex-row items-center" + " " + props.className}>
      {props.children}
    </div>
  );
};
