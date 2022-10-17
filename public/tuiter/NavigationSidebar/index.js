const NavigationSidebar = (active) => {
    return (`
      <div class="list-group">
        <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>

        <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="../HomeScreen/index.html">
        <i class="fa fa-home" style="float: left"> Home</i>

        <a class="list-group-item ${active === 'explore' ? 'active' : ''}" href="../explore/index.html">
        <i class="fa fa-hashtag" style="float: left"> Explore</i>

        <a class="list-group-item" href="/">
        <i class="fa fa-bell" style="float: left"> Notifications</i>

        <a class="list-group-item" href="/">
        <i class="fa fa-envelope" style="float: left"> Messages</i>

        <a class="list-group-item" href="/">
        <i class="fa fa-bookmark" style="float: left"> Bookmarks</i>

        <a class="list-group-item" href="/">
        <i class="fa fa-list" style="float: left"> Lists</i>

        <a class="list-group-item" href="/">
        <i class="fa fa-user" style="float: left"> Profile</i>

        <a class="list-group-item" href="/">
        <i class="fa fa-circle" style="float: left"> More</i>


      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
}
export default NavigationSidebar;