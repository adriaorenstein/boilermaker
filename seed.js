const { db } = require("./server/db");

const Boilermaker = require("./server/db/robot");

const robotData = [
  {
    name: "Wall-E",
    image:
      "https://1.bp.blogspot.com/-uw9Jrad_3WM/WtyffO7hdmI/AAAAAAAATQE/9s3hmrvRItklz0xwPduKH_AqgJ65nRjNgCLcBGAs/s1600/wall-e.jpg",
    duty: "Boiler cleaner",
  },
  {
    name: "R2D2",
    image:
      "https://cdn.thecoolist.com/wp-content/uploads/2016/06/R2-D2-famous-robot.jpg",
    duty: "Boiler alarm sounder",
  },
  {
    name: "Terminator",
    image: "https://miro.medium.com/max/3840/1*SSABfkBUeXyoqAArPfuHNg.jpeg",
    duty: "Boiler destroyer",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      robotData.map((robot) => {
        return Boilermaker.create(robot);
      })
    );
  } catch (err) {
    console.log("err seeding db");
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch((err) => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
      db.close();
    });
}
