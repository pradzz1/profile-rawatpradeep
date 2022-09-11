import React from 'react'
import './table.scss'


function WorkLog() {


  return (
    <>
      
<table id="Worklog">
  <caption>WORKLOG</caption>
  <tr class="weekdays">
    <th scope="col">Name</th>
    <th scope="col">Sprint 1</th>
    <th scope="col">Sprint 2</th>
    <th scope="col">Sprint 3</th>
    <th scope="col">Sprint 4</th>
    <th scope="col">Sprint 5</th>
    <th scope="col">Sprint 6</th>
  </tr>

  <tr class="days">
    <td class="day other-month">
      <div class="name">Ritviz</div>
    </td>
    <td class="day other-month">
      <div class="date">28</div>
      <div class="event">
        <div class="circle"></div>
        <div class="square"></div>
        <div class="triangle-up"></div>
      </div>
    </td>
    <td class="day other-month">
      <div class="date">29</div>
    </td>
    <td class="day other-month">
      <div class="date">30</div>
    </td>
    <td class="day other-month">
      <div class="date">31</div>
    </td>


    <td class="day">
      <div class="date">1</div>
    </td>
    <td class="day">
      <div class="date">2</div>
      <div class="event">
        <div class="event-desc">
          Career development @ Community College room #402
        </div>

        <div class="event-time">
          2:00pm to 5:00pm
        </div>
      </div>
      <div class="event">
        <div class="event-desc">
          Test event 2
        </div>

        <div class="event-time">
          5:00pm to 6:00pm
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="day">
      <div class="name">Vikram</div>
    </td>
    <td class="day">
      <div class="date">4</div>
    </td>
    <td class="day">
      <div class="date">5</div>
    </td>
    <td class="day">
      <div class="date">6</div>
    </td>
    <td class="day">
      <div class="date">7</div>
      <div class="event">
        <div class="event-desc">
          Group Project meetup
        </div>
        <div class="event-time">
          6:00pm to 8:30pm
        </div>
      </div>
    </td>
    <td class="day">
      <div class="date">8</div>
    </td>
    <td class="day">
      <div class="date">9</div>
    </td>
  </tr>
  <tr>
    <td class="day">
      <div class="name">Samule</div>
    </td>
    <td class="day">
      <div class="date">11</div>
    </td>
    <td class="day">
      <div class="date">12</div>
    </td>
    <td class="day">
      <div class="date">13</div>
    </td>
    <td class="day">
      <div class="date">14</div>
      <div class="event">
        <div class="event-desc">
          Board Meeting
        </div>
        <div class="event-time">
          1:00pm to 3:00pm
        </div>
      </div>
    </td>
    <td class="day">
      <div class="date">15</div>
    </td>
    <td class="day">
      <div class="date">16</div>
    </td>
  </tr>
  <tr>

    <td class="day">
      <div class="name">Justin</div>
    </td>
    <td class="day">
      <div class="date">18</div>
    </td>
    <td class="day">
      <div class="date">19</div>
    </td>
    <td class="day">
      <div class="date">20</div>
    </td>
    <td class="day">
      <div class="date">21</div>
    </td>
    <td class="day">
      <div class="date">22</div>
      <div class="event">
        <div class="event-desc">
          Conference call
        </div>
        <div class="event-time">
          9:00am to 12:00pm
        </div>
      </div>
    </td>
    <td class="day">
      <div class="date">23</div>
    </td>
  </tr>
  <tr>
    <td class="day">
      <div class="name">Ross</div>
    </td>
    <td class="day">
      <div class="date">25</div>
      <div class="event">
        <div class="event-desc">
          Conference Call
        </div>
        <div class="event-time">
          1:00pm to 3:00pm
        </div>
      </div>
    </td>
    <td class="day">
      <div class="date">26</div>
    </td>
    <td class="day">
      <div class="date">27</div>
    </td>
    <td class="day">
      <div class="date">28</div>
    </td>
    <td class="day">
      <div class="date">29</div>
    </td>
    <td class="day">
      <div class="date">30</div>
    </td>
  </tr>
  <tr>

    <td class="day">
      <div class="name">Phoebe</div>
    </td>
    <td class="day other-month">
      <div class="date">1</div>
     
    </td>
    <td class="day other-month">
      <div class="date">2</div>
    </td>
    <td class="day other-month">
      <div class="date">3</div>
    </td>
    <td class="day other-month">
      <div class="date">4</div>
    </td>
    <td class="day other-month">
      <div class="date">5</div>
    </td>
    <td class="day other-month">
      <div class="date">6</div>
    </td>
</tr>
</table>

    </>
  );
}

export default WorkLog;