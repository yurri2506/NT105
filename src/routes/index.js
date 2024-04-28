import { Navigate } from "react-router-dom";
import LayoutDefault from "../components/Layout/LayoutDefault";
import BaiVietBlog from '../pages/BaiVietBlog'
import BoiBai52La from '../pages/BoiBai52La'
import BoiBaiTarot from '../pages/BoiBaiTarot'
import BoiNgaySinh from '../pages/BoiNgaySinh'

export const routes = [
  // Public
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      {
        path: "baivietblog",
        element: <BaiVietBlog />,
      },
      {
        path: "boibai52la",
        element: <BoiBai52La />,
      },
      {
        path: "boibaitarot",
        element: <BoiBaiTarot />,
      },
      {
        path: "boingaysinh",
        element: <BoiNgaySinh />,
      },
    ],
  },
  // End Public

  // Private
  // {
  //   element: <PrivateRoutes />,
  //   children: [
  //     {
  //       element: <LayoutAdmin />,
  //       children: [
  //         {
  //           path: "admin",
  //           element: <Dashboard />,
  //         },
  //         {
  //           path: "info-company",
  //           element: <InfoCompany />,
  //         },
  //         {
  //           path: "job-manage",
  //           element: <JobManage />,
  //         },
  //         {
  //           path: "create-job",
  //           element: <CreateJob />,
  //         },
  //         {
  //           path: "detail-job/:id",
  //           element: <JobDetailAdmin />,
  //         },
  //         {
  //           path: "cv-manage",
  //           element: <CVManage />,
  //         },
  //         {
  //           path: "detail-cv/:id",
  //           element: <CVDetail />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // End Private
];