// import React from 'react';
// import { request } from '../utils';
// import { useAsync } from 'react-use';

// function GetIamData({ datasource: any }) {
//   const { value: projectList } = useAsync(async () => {
//     const {
//       data: {
//         ListProjectResult: { ProjectList },
//       },
//     } = await request(datasource.instanceSetting, 'iam', {
//       action: 'GetAccountAllProjectList',
//       version: '2015-11-01',
//     });
//     return ProjectList.map((i: any) => ({ ProjectId: i.ProjectId, ProjectName: i.ProjectName }));
//   }, [datasource.instanceSetting]);

//   return Array.isArray(projectList) ? projectList : [];
// }

// export default GetIamData;
