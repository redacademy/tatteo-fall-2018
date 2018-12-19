<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package RED_Starter_Theme
 */

?>

<article class="artist-profile" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<section class="single-artist">
	<?php $curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));?>
	<div class="avatar"> <?php echo get_avatar($user->ID, 120) ?></div>
	<div class="artistname"><h2><?php echo $curauth->nickname; ?></h2></div>
	<?php if(!empty($curauth->user_description)) { ?>
		<div class="artistdescription"><p><?php echo $curauth->user_description; ?></p></div>
	<?php } else { ?>
		<div class="artistdescription" <?php echo 'hidden'; ?>></div>
	<?php } ?>
	</section>

	<section class="instagram">
	<h2>Instagram</h2>
	<div class="grid container"></div>
	</section>

</article><!-- #post-## -->
