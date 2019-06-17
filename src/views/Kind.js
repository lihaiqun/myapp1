import React from 'react';
import { Tabs } from 'antd-mobile';
const tabs = [
  { title: '1 Tab', key: 't1' },
  { title: '2 Tab', key: 't2' },
  { title: '3 Tab', key: 't3' },
  { title: '4 Tab', key: 't4' },
  { title: '5 Tab', key: 't5' },
  { title: '6 Tab', key: 't6' }
]
class Com extends React.Component {
  render () {
    return (
      <div className = "box">
        <header className = "header">kind header</header>
        <div className = "content">
          <Tabs tabs={tabs}
          initialPage={'t2'}
          tabBarPosition="left"
          tabDirection="vertical"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of first tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Com;
