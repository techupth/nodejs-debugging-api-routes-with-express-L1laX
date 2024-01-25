import { Router } from "express";
import { assignments as assignmentDatabase } from "../data/assignments.js";

let assignmentsData = [...assignmentDatabase];

const assignmentRouter = Router();

// start coding here
assignmentRouter.get("/", (req, res) => {
  return res.json({
    data: assignmentsData,
  });
});

assignmentRouter.get("/:id", (req, res) => {
  const assignmentId = +req.params.id;
  const hasFound = assignmentsData.find((assign) => assign.id === assignmentId);

  if (!hasFound) {
    return res.status(404).json({
      messsage: `Assignment ${assignmentId} not found`,
    });
  }

  const assignment = assignmentsData.filter(
    (assign) => assign.id === assignmentId
  );

  return res.json({
    data: assignment[0],
  });
});

export default assignmentRouter;
