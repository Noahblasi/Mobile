import time
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

options = Options()
options.add_argument("--headless=new")
options.add_argument("--window-size=1440,1024")
options.binary_location = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

test_dir = r"C:\Users\Admin\.gemini\antigravity\scratch\tp5-diseno-decolonial\test_screens"
os.makedirs(test_dir, exist_ok=True)

driver = webdriver.Chrome(options=options)
try:
    file_path = os.path.abspath(r"C:\Users\Admin\.gemini\antigravity\scratch\tp5-diseno-decolonial\index.html")
    url = f"file:///{file_path.replace(os.sep, '/')}"
    print("Navigating to:", url)
    driver.get(url)
    time.sleep(2)
    
    # 1. Capture Desktop Home (Hero & Routes in normal resting state)
    driver.save_screenshot(os.path.join(test_dir, "01_home_hero_1440.png"))
    print("Saved 01_home_hero_1440.png")

    # 1b. Test Hover on Hero Planes
    actions = ActionChains(driver)
    
    plane_yellow = driver.find_element(By.ID, "hero-plane-conocer")
    actions.move_to_element(plane_yellow).perform()
    time.sleep(0.6)
    driver.save_screenshot(os.path.join(test_dir, "01b_hover_plane_conocer.png"))
    print("Saved 01b_hover_plane_conocer.png")

    plane_red = driver.find_element(By.ID, "hero-plane-habitar")
    actions.move_to_element(plane_red).perform()
    time.sleep(0.6)
    driver.save_screenshot(os.path.join(test_dir, "01c_hover_plane_habitar.png"))
    print("Saved 01c_hover_plane_habitar.png")

    plane_blue = driver.find_element(By.ID, "hero-plane-desobedecer")
    actions.move_to_element(plane_blue).perform()
    time.sleep(0.6)
    driver.save_screenshot(os.path.join(test_dir, "01d_hover_plane_desobedecer.png"))
    print("Saved 01d_hover_plane_desobedecer.png")

    # Move mouse away to reset resting state
    hero_title = driver.find_element(By.CLASS_NAME, "hero-main-title")
    actions.move_to_element(hero_title).perform()
    time.sleep(0.5)

    # 2. Scroll to Routes Summary
    driver.execute_script("document.getElementById('rutas').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "02_routes_summary.png"))
    print("Saved 02_routes_summary.png")

    # 3. Scroll to Route 01 Conocer
    driver.execute_script("document.getElementById('conocer').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "03_route_01_conocer.png"))
    print("Saved 03_route_01_conocer.png")

    # 3b. Scroll to Chapter Navigation Footer of Conocer
    driver.execute_script("document.querySelector('#conocer .chapter-nav-footer').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "03b_chapter_nav_footer.png"))
    print("Saved 03b_chapter_nav_footer.png")

    # 4. Scroll to Route 04 Relacionar (with Epistemologías del Sur card)
    driver.execute_script("document.getElementById('relacionar').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "04_route_04_relacionar.png"))
    print("Saved 04_route_04_relacionar.png")

    # 5. Scroll to Shared Concepts
    driver.execute_script("document.getElementById('compartidos').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "05_shared_concepts.png"))
    print("Saved 05_shared_concepts.png")

    # 5b. Scroll to Fuentes y Referencias (Desktop)
    driver.execute_script("document.getElementById('fuentes').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "05b_desktop_fuentes_referencias.png"))
    print("Saved 05b_desktop_fuentes_referencias.png")

    # 5c. Scroll to Footer / Ficha Técnica (Desktop)
    driver.execute_script("document.querySelector('.site-footer').scrollIntoView();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "05c_desktop_footer_colophon.png"))
    print("Saved 05c_desktop_footer_colophon.png")

    # 6. Test Drawer: Click on card "Diseño Situado" or "Ancestralidad"
    driver.execute_script("document.querySelector('[data-concept-id=\"9\"]').click();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "06_drawer_open_ancestralidad.png"))
    print("Saved 06_drawer_open_ancestralidad.png")

    # Close drawer
    driver.execute_script("document.getElementById('drawer-close-btn').click();")
    time.sleep(0.5)

    # 7. Test Search: Type "Fanon"
    search_input = driver.find_element(By.ID, "global-search-input")
    search_input.send_keys("Fanon")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "07_search_results_fanon.png"))
    print("Saved 07_search_results_fanon.png")

    # Clear search
    driver.execute_script("document.getElementById('search-clear-btn').click();")
    time.sleep(0.5)

    # 8. Test Detail View: Open Epistemologías del Sur from Route 04 grid
    # Architectural flow: HOME -> RUTAS -> RELACIONAR -> EPISTEMOLOGÍAS DEL SUR -> DETALLE
    driver.execute_script("document.getElementById('relacionar').scrollIntoView();")
    time.sleep(1)
    driver.execute_script("document.querySelector('[data-concept-id=\"22\"]').click();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "08_detail_epistemologias_hero.png"))
    print("Saved 08_detail_epistemologias_hero.png")

    # Test Hover over the 3 detail planes
    red_plane = driver.find_element(By.CSS_SELECTOR, ".detail-plane-red")
    ActionChains(driver).move_to_element(red_plane).perform()
    time.sleep(0.5)
    driver.save_screenshot(os.path.join(test_dir, "08b_hover_detail_plane_red.png"))
    print("Saved 08b_hover_detail_plane_red.png")

    yellow_plane = driver.find_element(By.CSS_SELECTOR, ".detail-plane-yellow")
    ActionChains(driver).move_to_element(yellow_plane).perform()
    time.sleep(0.5)
    driver.save_screenshot(os.path.join(test_dir, "08c_hover_detail_plane_yellow.png"))
    print("Saved 08c_hover_detail_plane_yellow.png")

    blue_plane = driver.find_element(By.CSS_SELECTOR, ".detail-plane-blue")
    ActionChains(driver).move_to_element(blue_plane).perform()
    time.sleep(0.5)
    driver.save_screenshot(os.path.join(test_dir, "08d_hover_detail_plane_blue.png"))
    print("Saved 08d_hover_detail_plane_blue.png")

    ActionChains(driver).move_by_offset(-200, -200).perform()
    time.sleep(0.3)

    # Scroll through detail sections
    driver.execute_script("document.getElementById('seccion-que-son').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "09_detail_seccion_01_que_son.png"))
    print("Saved 09_detail_seccion_01_que_son.png")

    driver.execute_script("document.getElementById('seccion-mas-alla-del-mapa').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "10_detail_seccion_02_mapa.png"))
    print("Saved 10_detail_seccion_02_mapa.png")

    driver.execute_script("document.getElementById('seccion-en-diseno').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "11_detail_seccion_03_diseno.png"))
    print("Saved 11_detail_seccion_03_diseno.png")

    driver.execute_script("document.getElementById('seccion-relacionados').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "12_detail_seccion_04_relacionados.png"))
    print("Saved 12_detail_seccion_04_relacionados.png")

    # 9. Test Mobile Viewport 390x844 (as required by the FADU brief)
    driver.set_window_size(390, 844)
    driver.execute_script("window.location.hash = '#home';")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "13_mobile_home_390.png"))
    print("Saved 13_mobile_home_390.png")

    # 9b. Test Mobile Staggered Editorial Planes (Centered)
    driver.execute_script("document.querySelector('.poster-stack').scrollIntoView({block: 'center'});")
    time.sleep(0.6)
    driver.save_screenshot(os.path.join(test_dir, "13b_mobile_planes_staggered.png"))
    print("Saved 13b_mobile_planes_staggered.png")

    # 9c. Test Mobile Routes Summary Cards
    driver.execute_script("document.getElementById('rutas').scrollIntoView();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "13c_mobile_routes_summary.png"))
    print("Saved 13c_mobile_routes_summary.png")

    # 9d. Test Mobile Shared Bridges
    driver.execute_script("document.getElementById('compartidos').scrollIntoView();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "13d_mobile_bridges.png"))
    print("Saved 13d_mobile_bridges.png")

    # 9e-1. Test Mobile Route 01 Concept Carousel Card 1 (Ancestralidad)
    driver.execute_script("document.getElementById('conocer').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "13e_mobile_route_01_card_01.png"))
    print("Saved 13e_mobile_route_01_card_01.png")

    # 9e-2. Test Mobile Route 01 Concept Carousel Card 2 (Next click)
    driver.execute_script("document.querySelector('.carousel-arrow-btn.arrow-next[data-route=\"conocer\"]').click();")
    time.sleep(0.6)
    driver.save_screenshot(os.path.join(test_dir, "13f_mobile_route_01_card_02.png"))
    print("Saved 13f_mobile_route_01_card_02.png")

    # 9e-3. Test Mobile Route 04 (Epistemologías del Sur Card)
    driver.execute_script("document.getElementById('relacionar').scrollIntoView();")
    time.sleep(1)
    driver.save_screenshot(os.path.join(test_dir, "14_mobile_route_04.png"))
    print("Saved 14_mobile_route_04.png")

    # 9f. Test Mobile Drawer from carousel card click (390px)
    driver.execute_script("document.querySelector('#grid-conocer .active-mobile-card').click();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "14b_mobile_drawer_open.png"))
    print("Saved 14b_mobile_drawer_open.png")

    driver.execute_script("document.getElementById('drawer-close-btn').click();")
    time.sleep(0.5)

    # 10. Test Mobile Detail Epistemologías del Sur
    driver.execute_script("window.location.hash = '#epistemologias-del-sur';")
    time.sleep(0.5)
    driver.execute_script("window.scrollTo(0, 0);")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "15_mobile_detail_hero.png"))
    print("Saved 15_mobile_detail_hero.png")

    driver.execute_script("document.querySelector('.detail-planes-stack').scrollIntoView({ block: 'center' });")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "15a_mobile_detail_planes.png"))
    print("Saved 15a_mobile_detail_planes.png")

    driver.execute_script("document.getElementById('seccion-que-son').scrollIntoView();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "15b_mobile_detail_seccion_01.png"))
    print("Saved 15b_mobile_detail_seccion_01.png")

    driver.execute_script("document.getElementById('seccion-mas-alla-del-mapa').scrollIntoView();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "15c_mobile_detail_mapa.png"))
    print("Saved 15c_mobile_detail_mapa.png")

    driver.execute_script("document.getElementById('seccion-en-diseno').scrollIntoView();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "15d_mobile_detail_diseno.png"))
    print("Saved 15d_mobile_detail_diseno.png")

    driver.execute_script("document.getElementById('seccion-relacionados').scrollIntoView();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "15e_mobile_detail_constellation.png"))
    print("Saved 15e_mobile_detail_constellation.png")

    # 10b. Test Next Card in Constellation Carousel
    driver.execute_script("document.querySelector('.carousel-arrow-btn.arrow-next[data-route=\"constellation\"]').click();")
    time.sleep(0.6)
    driver.save_screenshot(os.path.join(test_dir, "15f_mobile_constellation_card_02.png"))
    print("Saved 15f_mobile_constellation_card_02.png")

    # 10c. Test Open Drawer from Constellation Carousel
    driver.execute_script("document.querySelector('#grid-constellation .active-mobile-card .concept-card-mobile-btn').click();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "15g_mobile_drawer_from_constellation.png"))
    print("Saved 15g_mobile_drawer_from_constellation.png")

    driver.execute_script("document.getElementById('drawer-close-btn').click();")
    time.sleep(0.5)

    # 11. Test Mobile Fuentes y Referencias (Return to Home view)
    driver.execute_script("window.location.hash = '#fuentes';")
    time.sleep(0.8)
    driver.execute_script("document.getElementById('fuentes').scrollIntoView();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "18_mobile_fuentes_referencias.png"))
    print("Saved 18_mobile_fuentes_referencias.png")

    # 12. Test Mobile Footer / Ficha Técnica (Closing the site)
    driver.execute_script("document.querySelector('.site-footer').scrollIntoView();")
    time.sleep(0.8)
    driver.save_screenshot(os.path.join(test_dir, "19_mobile_footer_colophon.png"))
    print("Saved 19_mobile_footer_colophon.png")

finally:
    driver.quit()
    print("Verification completed successfully!")
