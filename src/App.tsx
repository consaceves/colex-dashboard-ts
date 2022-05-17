import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BootstrapTable, { BootstrapTableProps } from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import { demoTasks } from './data/task-data.js';
import { hover } from '@testing-library/user-event/dist/hover';


const columns = [
  {
    dataField: "language",
    text: "Language",
    sort: true
  },
  {
    dataField: "title",
    text: "Title",
    sort: true
  },
  {
    dataField: "description",
    text: "Description",
  },
  {
    dataField: "nusers",
    text: "Contributors"
  },
  {
    dataField: "max_users",
    text: "Maximum # contributors"
  }
];

const MyExportCSV = (props: { onExport: () => void; }) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div>
      <button className="btn btn-success" onClick={ handleClick }>Export as CSV</button>
    </div>
  );
};

const { SearchBar } = Search;

function App() {
  return (
    <div className="App">
      <Container>
        <ToolkitProvider
        bootstrap4
        keyField="language"
        data={demoTasks}
        columns={columns}
        exportCSV
        search
        >
          {
            (props) => (
              <Container>
                <Row>
                  <Col><SearchBar { ...props.searchProps }/></Col>
                </Row>
                <hr />
                <BootstrapTable hover { ...props.baseProps } />
                <Col><MyExportCSV { ...props.csvProps }></MyExportCSV></Col>
              </Container>
            )
          }
        </ToolkitProvider>
      </Container>
    </div>
  );
}

export default App;
