import { Col, Form, FormControl, FormGroup, FormLabel, FormSelect, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <div className="form-group">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel><br />
      <FormControl id="wd-name" placeholder="A1 - ENV + HTML" /><br />
      </div>
      <div className="form-group">
      <FormControl as="textarea" id="wd-description" placeholder="The assignment is available online" /> 
      <br />
      </div>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-points" className="me-3">Points</FormLabel>
          </Col>
          <Col>
            <FormControl id="wd-points" placeholder="100" /><br />
          </Col>
        </Row>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-group" className="me-3">Assignment Group</FormLabel>
          </Col>
          <Col>
            <FormSelect id="wd-group">
            <option defaultChecked>
            ASSIGNMENTS</option>
            <option>
            QUIZZES</option>
            <option>
            EXAMS</option>
            <option>
            PROJECT</option>
            </FormSelect><br />
          </Col>
        </Row>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-display-grade-as" className="me-3">Display Grade as</FormLabel>
          </Col> 
          <Col>
            <FormSelect id="wd-display-grade-as">
            <option defaultChecked>
            Percentage</option>
            </FormSelect><br />
          </Col>
        </Row>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-submission-type" className="me-3">Submission Type</FormLabel>
          </Col>
          <Col>
            <FormSelect id="wd-submission-type">
            <option defaultChecked>
            Online</option>
            </FormSelect><br />
            <FormLabel><b>Online Entry Options</b></FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-text-entry" className="me-2"/>
            <FormLabel htmlFor="wd-text-entry">Text Entry</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-website-url" className="me-2"/>
            <FormLabel htmlFor="wd-website-url">Website URL</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-media-recordings" className="me-2"/>
            <FormLabel htmlFor="wd-media-recordings">Media Recordings</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-student-annotation" className="me-2"/>
            <FormLabel htmlFor="wd-student-annotation">Student Annotation</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-file-upload" className="me-2"/>
            <FormLabel htmlFor="wd-file-upload">File Upload</FormLabel><br /><br />
          </Col>
        </Row>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-assign-to" className="me-3">Assign</FormLabel>
          </Col>
          <Col>
            <Row>
              <FormLabel htmlFor="wd-assign-to"><b>Assign To</b></FormLabel>
            </Row>
            <Row className="me-1 ms-1">
                <input id="wd-assign-to" placeholder='Everyone' />
            </Row><br/>
            <Col>
            <FormLabel htmlFor="wd-due-date"><b>Due</b></FormLabel><br/>
            <InputGroup>
            <FormControl id="wd-due-date" placeholder="May 13, 2024, 11:59 PM" />
            <InputGroupText><FaRegCalendarAlt /></InputGroupText>
            </InputGroup>
            </Col><br/>
            <Row>
            <Col>
            <FormLabel htmlFor="wd-available-from"><b>Available from</b></FormLabel><br/>
            <InputGroup>
            <FormControl id="wd-due-date" placeholder="May 6, 2024, 11:59 PM" />
            <InputGroupText><FaRegCalendarAlt /></InputGroupText>
            </InputGroup>
            </Col>
            <Col>
                <FormLabel htmlFor="wd-available-until"><b>Until</b></FormLabel><br/>
                <InputGroup>
            <FormControl id="wd-due-date" placeholder="May 13, 2024, 11:59 PM" />
            <InputGroupText><FaRegCalendarAlt /></InputGroupText>
            </InputGroup>
            </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
);}
