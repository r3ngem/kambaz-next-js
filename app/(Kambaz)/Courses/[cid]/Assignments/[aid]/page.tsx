export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} /><br /><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assigntment Group</label>
          </td>
          <td>
            <select id="wd-group">
            <option selected value="ASSIGNMENTS">
            ASSIGNMENTS</option>
            </select><br /><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
            <option selected value="Percentage">
            Percentage</option>
            </select><br /><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
            <option selected value="Online">
            Online</option>
            </select><br /><br />
            <label>Online Entry Options</label><br/>
            <input type="checkbox" name="check-sub-type" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>
            <input type="checkbox" name="check-sub-type" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>
            <input type="checkbox" name="check-sub-type" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
            <input type="checkbox" name="check-sub-type" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
            <input type="checkbox" name="check-sub-type" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Upload</label><br /><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
            <label htmlFor="wd-assign-to">Assign To</label>
          <tr>
          <td>
            <td>
                <input id="wd-assign-to" value='Everyone' />
            </td><br/>
            <td>
            <label htmlFor="wd-due-date">Due</label><br/>
            <input type="date"
                value="2024-05-13"
                id="wd-due-date"/>
            </td><br/>
            <td>
            <label htmlFor="wd-available-from">Available from</label><br/>
            <input type="date"
                value="2024-05-06"
                id="wd-available-from"/>
            </td>
            <td>
                <label htmlFor="wd-available-until">Until</label><br/>
                <input type="date"
                value="2024-05-20"
                id="wd-available-until"/>   
            </td>
          </td>
          </tr>
        </tr>
      </table>
    </div>
);}
