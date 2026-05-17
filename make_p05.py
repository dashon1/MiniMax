import zipfile, os
src = '/workspace/product_05_onboarding'
out = '/workspace/store/Product_05_Onboarding_Autopilot_v1.0.zip'
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(src):
        for file in files:
            fp = os.path.join(root, file)
            arcname = fp.replace(src + '/', '', 1)
            zf.write(fp, arcname)
            print(f'ADDED: {arcname}')
print(f'DONE: {os.path.getsize(out)/1024:.1f} KB')