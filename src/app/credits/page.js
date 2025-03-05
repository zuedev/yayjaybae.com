export default () => {
  let artCredits = [
    {
      thing: "1.0 VTuber Model Art + Rig",
      artist: "COGNITOHAZARD",
      link: "https://linktr.ee/Hackneid",
    },
    {
      thing: "2.0 VTuber Model Art + Rig",
      artist: "Qwerty_Soda",
      link: "https://linktr.ee/qwertysoda",
    },
    {
      thing: "2.0 Model VBridger Enhancements",
      artist: "DesdemonaVT",
      link: "https://twitter.com/DesdemonaVT",
    },
    {
      thing: "3D VTuber Models",
      artist: "Birdchii",
      link: "https://x.com/birdchii",
    },
    {
      thing: "Edits to 3D Model",
      artist: "Violet_Viper",
      link: "https://violetviper.carrd.co/",
    },
    {
      thing: "Banner Art",
      artist: "dormirVT",
      link: "https://twitter.com/dormirVT",
    },
    {
      thing: "Emotes",
      artist: "EightyEightDesign",
      link: "https://vgen.co/EightyEightDesign",
    },
    {
      thing: "Emotes",
      artist: "Alek",
      link: "https://twitter.com/Alek0l6",
    },
    {
      thing: "Emotes",
      artist: "Teresa Ellayne",
      link: "https://teresaellayne.com/",
    },
    {
      thing: "Emotes",
      artist: "NocturneAubade",
      link: "https://nocturneaubade.carrd.co/",
    },
    {
      thing: "Emotes",
      artist: "BeaGremlin",
      link: "https://beagremlin.carrd.co/",
    },
    {
      thing: "Emotes",
      artist: "GoldCanines",
      link: "https://goldcanines.carrd.co/",
    },
    {
      thing: "Sub Badges",
      artist: "JackGravitty",
      link: "https://manylink.co/@JackGravitty",
    },
    {
      thing: "Panel Art",
      artist: "AmaiMilk",
      link: "https://twitter.com/AmaiMilk69",
    },
    {
      thing: "Logo",
      artist: "Baebiiverse",
      link: "https://www.fiverr.com/baebiiverse",
    },
    {
      thing: "Keychain and Sticker Art",
      artist: "kd_0510",
      link: "https://kdtk0510.wixsite.com/mysite",
    },
    {
      thing: "Chatting and Gaming Background",
      artist: "yuzuyukihira",
      link: "https://vgen.co/yuzuyukihira",
    },
    {
      thing: "Starting and Ending Screens Art",
      artist: "nostdoro",
      link: "https://nostee.com/",
    },
    {
      thing: "Starting and Ending Screens Animation",
      artist: "ClericalEric",
      link: "https://www.twitch.tv/clericaleric",
    },
    {
      thing: "Be Right Back Screen",
      artist: "YourBuddyAxel",
      link: "https://axelspage.carrd.co/",
    },
    {
      thing: "TTS Mascot Design",
      artist: "PinninaZero",
      link: "https://www.deviantart.com/pinninazero/about",
    },
    {
      thing: "TTS Mascot Art and Rig",
      artist: "Omniooman",
      link: "https://omniooman.uwu.ai/",
    },
    {
      thing: "Stinger",
      artist: "Kyosaka30",
      link: "https://kyosakacoms.carrd.co/",
    },
    {
      thing: "Original BGM",
      artist: "RedSpark_Music",
      link: "https://redsparkmusic.carrd.co/",
    },
  ];

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-bold text-white uppercase mt-8">
        Art Credits
      </h1>
      <div className="mt-4">
        {artCredits.map((credit, index) => (
          <div
            key={credit.thing + index}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold text-white">
              {credit.thing} by{" "}
              <a
                href={credit.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-pink-400 hover:underline hover:text-yellow-400"
              >
                {credit.artist}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
