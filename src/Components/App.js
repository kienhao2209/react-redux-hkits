import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';

const App = () => {
  return (
    <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search />
            <TableData />
            <AddUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
