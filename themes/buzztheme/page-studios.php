<?php /* Template name: page-studios */?>

<?php
/**
 * The template for displaying archive pages.
 *
 * @package RED_Starter_Theme
 */

get_header();?>

<div id="primary" class="content-area">
  <main id="main" class="site-main" role="main">

    <section class="title">
      <h1>Studios</h1>
    </section>
    <section class="studio-users">

      <?php
$args1 = array(
    'role' => 'studio',
    'orderby' => 'registered',
    'order' => 'desc',
    'number' => '6',
);?>

<?php if(!(count($studios) <= 6)): ?>
	<section class="button"><button class="load-more-studios">Load more</button></section>
<?php endif; 

$studios = get_users($args1);
foreach ($studios as $user) {
    echo '<div class="container"><div class="studio">' .
    '<a href="' . get_author_posts_url($user->ID) . '">'
    . get_avatar($user->ID) .
    '</div><li>'
    . $user->display_name .
    '</li> <li>'
    . $user->location .
        '</li> </div></a>';
}
?>
    </section>

<?php //if(!(count($studios) <= 6)): ?>
	<section class="button"><button class="load-more-studios">Load more</button></section>
<?php// endif; ?>

  </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer();?>