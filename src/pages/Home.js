import logo_footer from "../assets/logo_footer.png";
import pasta from "../assets/pasta.png";

function Home() {
  return (
    <div>   
      <main>
        <section>
          <article>
            <h1>Section 1</h1>
            <p>
              Lorem ipsum dolor sit amet, Aliquam vitae dolor ullamcorper,
              pharetra neque vitae, tristique eros. Vestibulum interdum posuere
              erat dictum efficitur. Donec non dictum erat. Sed et libero
              sapien. Maecenas euismod in dolor vitae facilisis, porttitor eget
              facilisis eu, faucibus a sem.
            </p>
          </article>
        </section>
        <section>
          <article>
            <h2>Food 2.1</h2>
            <p>
              Lorem ipsum dolor sit amet, Aliquam vitae dolor ullamcorper,
              pharetra neque vitae, tristique eros. Vestibulum interdum posuere
              erat dictum efficitur. Donec non dictum erat. Sed et libero
              sapien. Maecenas euismod in dolor vitae facilisis, porttitor eget
              facilisis eu, faucibus a sem.
            </p>
            <br />
            <img src={pasta} alt="food" />
          </article>
          <article>
            <h2>Food 2.2</h2>
            <p>
              Lorem ipsum dolor sit amet, Aliquam vitae dolor ullamcorper,
              pharetra neque vitae, tristique eros. Vestibulum interdum posuere
              erat dictum efficitur. Donec non dictum erat. Sed et libero
              sapien. Maecenas euismod in dolor vitae facilisis, porttitor eget
              facilisis eu, faucibus a sem.
            </p>
            <br />
            <img src={pasta} alt="food" />
          </article>
          <article>
            <h2>Food 2.3</h2>
            <p>
              Lorem ipsum dolor sit amet, Aliquam vitae dolor ullamcorper,
              pharetra neque vitae, tristique eros. Vestibulum interdum posuere
              erat dictum efficitur. Donec non dictum erat. Sed et libero
              sapien. Maecenas euismod in dolor vitae facilisis, porttitor eget
              facilisis eu, faucibus a sem.
            </p>
            <br />
            <img src={pasta} alt="food" />
          </article>
        </section>
      </main>
      {/* <footer>
        <div>
          <img src={logo_footer} alt="footer" />
        </div>
        <div>
          <p>Copyright Little Lemon</p>
        </div>
      </footer> */}
    </div>
  );
}

export default Home;
