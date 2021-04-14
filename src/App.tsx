import React, {FC} from 'react';
import {List, NavBar} from "antd-mobile";

type ListItemData = {
  url: string,
  title: string
};

type ListData = {
  key: string,
  title: string,
  items: ListItemData[]
};

const listDataArray: ListData[] = [
  {
    key: 'jd',
    title: '京东',
    items: [
      {
        url: 'https://h5.m.jd.com/rn/2E9A2bEeqQqBP9juVgPJvQQq6fJ/index.html',
        title: '领京豆'
      },
      {
        url: 'https://bean.m.jd.com/bean/signIndex.action',
        title: '京豆签到日历'
      },
      {
        url: 'https://bean.m.jd.com/plantBean/index',
        title: '种豆得豆'
      },
      {
        url: 'https://m.jr.jd.com/integrate/signin/index.html',
        title: '双签领豆'
      },
      {
        url: 'https://turntable.m.jd.com/?actId=jgpqtzjhvaoym',
        title: '抽京豆'
      },
      {
        url: 'https://spa.jd.com/home',
        title: '摇京豆'
      },
      {
        url: 'openapp.jdmobile://virtual?params={"category":"jump","des":"jdreactcommon","modulename":"JDReactJDBeansTaskCenter","appname":"JDReactJDBeansTaskCenter","ishidden":true,"param":{"page":"collectJDBeansTaskCenter","transparentenable":false},"sourceType":"JDReactCollectJDBeans"}',
        title: '进店领豆'
      }
    ]
  }
];

export const App: FC = () => {
  return (
    <div>
      <NavBar mode="light">Automator</NavBar>
      <div>
        {listDataArray.map(listData => (
          <List renderHeader={() => listData.title} key={listData.key}>
            {listData.items.map(itemData => (
              <a href={itemData.url} key={itemData.url}>
                <List.Item arrow="horizontal">{itemData.title}</List.Item>
              </a>
            ))}
          </List>
        ))}
      </div>
    </div>
  );
};
