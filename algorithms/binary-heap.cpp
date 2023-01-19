void NormalizeHeap(int arr[], int size, int i){
    int temp = i;

    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if(l < size && arr[l] > arr[temp]){
        temp = l;
    }

    if(r < size && arr[r] > arr[temp]){
        temp = r;
    }

    if(temp != i){
        std::swap(arr[temp], arr[i]);

        NormalizeHeap(arr, size, temp);
    }
}

int main()
{
    int size ;
    std::cin >> size;
    int arr[size];
    for(int i = 0; i < size; i++){
        std::cin >> arr[i];
    }

    for(int i = size - 1; i >= 0; i--){
        NormalizeHeap(arr, size, i);
    }

    for (int i = size - 1; i >= 0; i--)
    {
        std::swap(arr[0], arr[i]);

        NormalizeHeap(arr, i, 0);
    }

    for(int i = 0; i < size; i++){
        std::cout << arr[i] << " ";
    }

    return 0;
}