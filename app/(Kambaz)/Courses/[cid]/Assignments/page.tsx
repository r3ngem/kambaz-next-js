import Link from 'next/link';
import AssignmentsControls from './AssignmentsControls';
import { Col, ListGroup, ListGroupItem, Row, Table } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { FaCaretDown } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import AssignmentControlButtons from './AssignmentControlButtons';
import LessonControlButtons from './LessonControlButtons';
export default function Assignments() {
  return (
    <div id="wd-assignments"> 
    <AssignmentsControls /><br /><br />
    <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /><FaCaretDown className="me-2"/>
            <b>ASSIGNMENTS</b>
            <div className="d-flex align-items-center ms-auto">
            <p className="percent-total me-4">40% of Total</p>
                <AssignmentControlButtons />
              </div>
            </div>
          <ListGroup className="wd-assignments rounded-0">
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <LuNotebookPen className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">A1</b></Link>
                <p> 
                  <span className="red-module">
                    Multiple Modules
                    </span>
                    | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts
                    </p>
              </div>
          
              <div className="ms-auto">
              <LessonControlButtons />
              </div>
              </ListGroupItem>
              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <LuNotebookPen className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">A2</b></Link>
                <p> 
                  <span className="red-module">
                    Multiple Modules
                    </span>
                    | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts
                    </p>
              </div>
          
              <div className="ms-auto">
              <LessonControlButtons />
              </div>
              </ListGroupItem>
              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <LuNotebookPen className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">A3</b></Link>
                <p> 
                  <span className="red-module">
                    Multiple Modules
                    </span>
                    | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts
                    </p>
              </div>
          
              <div className="ms-auto">
              <LessonControlButtons />
              </div>
              </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
            </ListGroup>


            <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /><FaCaretDown className="me-2"/>
            <b>QUIZZES</b>
            <div className="d-flex align-items-center ms-auto">
            <p className="percent-total me-4">10% of Total</p>
                <AssignmentControlButtons />
              </div>
            </div>
            </ListGroupItem>
            </ListGroup>


            <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /><FaCaretDown className="me-2"/>
            <b>EXAMS</b>
            <div className="d-flex align-items-center ms-auto">
            <p className="percent-total me-4">20% of Total</p>
                <AssignmentControlButtons />
              </div>
            </div>
            </ListGroupItem>
            </ListGroup>


            <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /><FaCaretDown className="me-2"/>
            <b>PROJECT</b>
            <div className="d-flex align-items-center ms-auto">
            <p className="percent-total me-4">30% of Total</p>
                <AssignmentControlButtons />
              </div>
            </div>
            </ListGroupItem>
            </ListGroup>
    </div>
);}
