<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Tim
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i&display=swap" rel="stylesheet">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'tim' ); ?></a>

	<header id="masthead" class="site-header">
		<div>
			<div class="d-flex justify-content-between align-items-center py-2 px-3 header-wrapper">
				<div class="site-logo">
					<h2>Tim Wu</h2>
				</div>
				<button class="hamburger hamburger--collapse d-md-none" type="button">
				  	<span class="hamburger-box">
			    		<span class="hamburger-inner"></span>
				  	</span>
				  	<span class="hamburger-label">Menu</span>
				</button>
				<nav id="site-navigation" class="main-navigation">
					
					<?php
					wp_nav_menu( array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
					) );
					?>
				</nav>
			</div>
		</div>
	</header>
	<div id="content" class="site-content">
