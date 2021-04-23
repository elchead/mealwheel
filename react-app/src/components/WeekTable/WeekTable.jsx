
import React from 'react';
import MaterialTable from 'material-table';

class WeekTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  state = {
    loading:false,
    stats: [],
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://corona.lmao.ninja/countries') //data source
        .then(response => response.json())
        .then(res => {
            this.setState({ stats: res, loading: false }, () => console.log(res))
        })
        .catch(error => {
            console.log(error)
        })
}
  render() {
    return (
      <React.Fragment>
        <MaterialTable style={{marginLeft:'10px', marginRight:'10px'}}
          title="Weekly Review of your Meal Plan"
          columns={[
            { title: 'Monday', field: 'country' },
            { title: 'Tuesday', field: 'cases' },
            { title: 'Wednesday', field: 'todayCases' },
            { title: 'Thursday', field: 'deaths', type: 'text' },
            { title: 'Friday', field: 'todayDeaths' },
            { title: 'Saturday', field: 'recovered' },
            { title: 'Sunday', field: 'active' },
          ]}
          data={this.state.stats}
          actions={[
            {
              icon: 'refresh',
              tooltip: 'Refresh',
              isFreeAction: true,
              onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
            }, 
          ]}
          options={{
            
            headerStyle: {
              backgroundColor: '#000000',
              color: '#FFFF'
            }}
          }
          
        />
        <br/><br/><br/>
      </React.Fragment>
    )
  }
}
export default WeekTable;