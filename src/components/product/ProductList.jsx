// ProductList.jsx

import { Box, Grid, Pagination, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useProducts } from "../../contexts/ProductContextProvider";
import Sidebar from "./Sidebar";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 20; // 4 cards per row and 3 rows
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  // pagination

  return (
    <Grid container sx={{ width: "100%", marginLeft: "25%" }}>
      <Grid item sm={2} md={8}>
        <Box
          sx={{
            marginBottom: "5%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            overflowX: "auto",
            paddingRight: "20px",
          }}
        >
          {currentData().map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              sx={{ marginBottom: "20px" }}
            />
          ))}
        </Box>
        <Grid container justifyContent="center">
          <Pagination
            color="primary"
            count={count}
            page={page}
            onChange={handleChange}
            sx={{ marginBottom: "5%" }}
          />
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Sidebar />
      </Grid>
      <Box>
        <Typography
          sx={{
            width: "63.2%",
            backgroundColor: "#292F39",
            padding: "10px 12px 14px 12px",
            color: "#CBC5BD",
            marginTop: "27px",
            border: "2px solid #373C3F",
            marginBottom: "10%",
          }}
        >
          Мало найдется тех, кто незнаком с компьютерными играми, кто-то играет
          сам, кто-то далекий от всего этого красочного мира – нет, нет, а
          слышал всё-таки. Их трудно назвать достоянием, но одной из самых
          увлекательнейших ниш для проведения досуга – они всё же являются. И
          многие только ждут, когда выйдет очередная новая игра чтобы
          насладиться графикой нового уровня и найти что-то новое для себя. А
          наш сайт предоставляет возможность скачать новые игры через торрент
          2022 года абсолютно бесплатно.
          <br></br>
          <br></br>
          Примечательно то, что игры для ПК в любом случае находят своего
          ценителя, речь идет не об одной конкретной игре, а о жанре в целом.
          Создаются целые мировые чемпионаты по разным играм, с внушительными
          призами. Кто-то любит пострелять – бегая в коридорах, или по различным
          местностям, выискивая укрытия и стреляя в противников; кто-то же без
          ума от стратегий – когда нужно выстроить свой замок/город/страну и
          захватить противника; кому-то нравятся головоломки, для тренировки
          мозга; каждый жанр обладает своими неповторимыми особенностями,
          привлекающими пользователей.
          <br></br>
          <br></br>
          Мы собираем понравившиеся игры на рабочем столе, иногда удаляем, порой
          – нет, и заходим в них снова. Какие-то игры требуют наличия интернета,
          какие-то нет, всё разнообразно и на любой, даже самый взыскательный
          вкус. Каждый сможет скачать игры на компьютер через торрент в любом
          количестве и найдет своё – среди новинок, выпускающихся постоянно или
          среди уже имеющихся игр, заслуживших положительную репутацию для
          многих игроков. Удачи Вам в поиске своей игры на компьютер!
        </Typography>
      </Box>
    </Grid>
  );
};

export default ProductList;
