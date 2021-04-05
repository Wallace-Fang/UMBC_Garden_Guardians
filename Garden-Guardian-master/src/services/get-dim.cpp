#include <opencv2/opencv.hpp>

using namespace std;
using namespace cv;


int main(int argc, char** argv )
{
    Mat img = imread(argv[1]);
    int width = img.size().width;
    int height = img.size().height;
    cout << width << 'x' << height << endl;
    return 0;
}
