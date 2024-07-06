<template>
  <div class="about">
    <h1>Сообщество игроков, которых объединила EVE Online</h1>
    <div>
      <span
        >Сформировались в 2023г, как ребрендинг альянса Fast Kick в уже ранее упомянутой EVE
        Online.</span
      >
      <div class="games">
        <h2>Во что играем:</h2>
        <ul>
          <li>
            <img
              src="../assets/eve_online_macos_bigsur_icon_190212.webp"
              width="30"
              height="30"
            />EVE Online
          </li>
          <li><img src="../assets/factorio.png" width="30" height="30" />Factorio</li>
          <li><img src="../assets/lol.png" width="30" height="30" />League of Legend</li>
          <li>
            <img src="../assets/goose goose duck.webp" width="30" height="30" />Goose Goose Duck
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  .games {
    margin-top: 4rem;
  }
  li {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
}
</style>
