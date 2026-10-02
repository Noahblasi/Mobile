import time
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--headless=new')
options.add_argument('--window-size=390,844')
options.binary_location = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

driver = webdriver.Chrome(options=options)
try:
    file_path = os.path.abspath(r"C:\Users\Admin\.gemini\antigravity\scratch\tp5-diseno-decolonial\index.html")
    url = "file:///" + file_path.replace("\\", "/")
    driver.get(url)
    time.sleep(1.5)

    # Detail Epistemologías del Sur - constellation carousel with dots
    driver.execute_script("window.location.hash = '#epistemologias-del-sur';")
    time.sleep(0.6)
    driver.execute_script("document.getElementById('dots-constellation').scrollIntoView({block: 'center'});")
    time.sleep(0.5)
    driver.save_screenshot(r"C:\Users\Admin\.gemini\antigravity\scratch\tp5-diseno-decolonial\test_screens\15e_mobile_constellation_with_dots.png")
    print("Saved 15e_mobile_constellation_with_dots.png")

finally:
    driver.quit()
