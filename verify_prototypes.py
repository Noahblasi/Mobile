import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def run_prototype_verification():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    test_dir = os.path.join(base_dir, "test_screens")
    os.makedirs(test_dir, exist_ok=True)

    options = Options()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--allow-file-access-from-files')
    options.add_argument('--disable-web-security')

    driver = webdriver.Chrome(options=options)

    try:
        # TEST 1: index.html?version=desktop at 1440 x 1024
        driver.set_window_size(1440, 1024)
        desktop_url = "file:///" + os.path.join(base_dir, "index.html").replace("\\", "/") + "?version=desktop"
        driver.get(desktop_url)
        time.sleep(1)

        badge_label = driver.find_element(By.ID, "prototype-badge-text").text
        print(f"Test 1 Badge Label: '{badge_label}'")
        assert "DESKTOP" in badge_label, f"Expected DESKTOP in badge label, got {badge_label}"

        driver.save_screenshot(os.path.join(test_dir, "20_prototype_desktop_entry.png"))
        print("Saved 20_prototype_desktop_entry.png")

        # TEST 2: index.html?version=mobile on Desktop viewport (1440 x 1024) -> Mobile Device Studio
        mobile_url = "file:///" + os.path.join(base_dir, "index.html").replace("\\", "/") + "?version=mobile"
        driver.get(mobile_url)
        time.sleep(2)

        # Check device shell is visible
        shell = driver.find_element(By.ID, "device-preview-shell")
        assert shell.is_displayed(), "Device preview shell should be displayed on desktop screen!"

        iframe = driver.find_element(By.ID, "mobile-device-iframe")
        assert iframe.is_displayed(), "Iframe should be displayed!"

        driver.save_screenshot(os.path.join(test_dir, "21_prototype_mobile_studio.png"))
        print("Saved 21_prototype_mobile_studio.png")

        # TEST 3: Switch to iframe and test mobile interactions inside it
        driver.switch_to.frame(iframe)
        time.sleep(1)
        
        # Check inside iframe: window innerWidth is 390
        iframe_width = driver.execute_script("return window.innerWidth;")
        print(f"Inside iframe innerWidth: {iframe_width}px")
        assert iframe_width <= 400, f"Expected iframe width ~390px, got {iframe_width}"

        # Check mobile cards exist
        conocer_card = driver.find_element(By.ID, "hero-plane-conocer")
        assert conocer_card.is_displayed(), "Mobile conocer card should be visible inside frame"

        # Switch back to parent window
        driver.switch_to.default_content()

        # TEST 4: index.html?version=mobile on native mobile screen (390 x 844)
        driver.set_window_size(390, 844)
        driver.get(mobile_url)
        time.sleep(1)

        # Device shell should NOT be visible on actual mobile screen
        is_mode_preview = driver.execute_script("return document.body.classList.contains('mode-device-preview');")
        assert not is_mode_preview, "mode-device-preview should NOT be active on mobile screen <= 768px"

        driver.save_screenshot(os.path.join(test_dir, "22_prototype_mobile_native.png"))
        print("Saved 22_prototype_mobile_native.png")

        # TEST 5: desktop.html redirect
        driver.set_window_size(1440, 1024)
        desktop_html_url = "file:///" + os.path.join(base_dir, "desktop.html").replace("\\", "/")
        driver.get(desktop_html_url)
        time.sleep(1)
        current_url = driver.current_url
        print(f"desktop.html redirected to: {current_url}")
        assert "version=desktop" in current_url

        # TEST 6: mobile.html redirect
        mobile_html_url = "file:///" + os.path.join(base_dir, "mobile.html").replace("\\", "/")
        driver.get(mobile_html_url)
        time.sleep(1)
        current_url = driver.current_url
        print(f"mobile.html redirected to: {current_url}")
        assert "version=mobile" in current_url

        print("\nALL PROTOTYPE TESTS PASSED SUCCESSFULLY!")

    finally:
        driver.quit()

if __name__ == "__main__":
    run_prototype_verification()
