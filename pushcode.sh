echo "Started commit source code to github"
git add . && git commit -m "$1" && git push
